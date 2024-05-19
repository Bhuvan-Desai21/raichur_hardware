import { auth } from "@/auth";
import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await auth();
  const email = session?.user?.email;

  if (!email) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { cartItems, totalAmount } = await req.json();

  try {
    await addDoc(collection(db, "checkouts"), {
      email,
      cartItems,
      totalAmount,
      timestamp: new Date(),
    });
    return NextResponse.json({ message: "Checkout successful" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error during checkout", error },
      { status: 500 }
    );
  }
}