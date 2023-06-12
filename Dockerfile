FROM denoland/deno:alpine

EXPOSE 8000
WORKDIR /app
USER deno

ADD . .
CMD ["run", "--allow-all", "main.ts"]
