import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    const res = await fetch('http://3.90.34.20:8080/berebere/products/', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()

    return NextResponse.json({ data })
}