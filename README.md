# Send Me Anonymously

> Send me (shahank) an anonymous message. That's all.

This is just me tackling both the client and server of a fully functional application.
I've tried to follow all the "best practices" and idiomatic ways to do the things I am doing, hope I did them right.

This app is also a playground for me trying out shadcn/ui, because I've been itching to try out zod validation in forms, themeing and the new sonner component.

## Run locally

1. Clone the repo and `cd` into it.
2. Go into the `client` folder
3. `bun install` and `bun run dev` (or whatever you use)
4. If you need to run the server, `cd` back up and go into the `server` folder
5. `bun install` and `bun run dev` (or again, whatever you use)

Running the server sets up a local D1 instance, so you can explore over there.

Also note that the client would be requiring two environment variables: `NEXT_PUBLI_API_URL_DEV` and `NEXT_PUBLIC_API_URL_PROD`. 
The dev url is `http://localhost:8787/messages/add-message`, and for the prod url... you better directly contact me.
