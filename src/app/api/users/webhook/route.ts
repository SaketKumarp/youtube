import { NextRequest } from "next/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    // Verify Clerk webhook
    const evt = await verifyWebhook(req);

    const eventType = evt.type;

    // USER CREATED
    if (eventType === "user.created") {
      const { data } = evt;

      await db.insert(users).values({
        clerkId: data.id,
        name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
        imageUrl: data.image_url,
      });

      console.log("User created");
    }

    // USER UPDATED
    if (eventType === "user.updated") {
      const { data } = evt;

      await db
        .update(users)
        .set({
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url,
        })
        .where(eq(users.clerkId, data.id));

      console.log("User updated");
    }

    // USER DELETED
    if (eventType === "user.deleted") {
      const { data } = evt;

      if (!data.id) {
        return new Response("Missing user id", {
          status: 400,
        });
      }

      await db.delete(users).where(eq(users.clerkId, data.id));

      console.log("User deleted");
    }

    return new Response("Webhook received", {
      status: 200,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);

    return new Response("Error verifying webhook", {
      status: 400,
    });
  }
}
