import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/') {
        // return NextResponse.rewrite(new URL('https://stake.cardinal.so/7K1eHME4xvusf49PVqzatUJHLqdZMNvBWjVhz6j3D73B', req.url))
        return NextResponse.redirect('https://stake.cardinal.so/7K1eHME4xvusf49PVqzatUJHLqdZMNvBWjVhz6j3D73B')
    }
    return NextResponse.next()
}
