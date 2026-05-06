import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { pipeline } from "node:stream/promises";

const assets = {
  "social-facebook.svg": "https://www.figma.com/api/mcp/asset/d513e5be-0ded-4beb-b9d7-55758e49e4e8",
  "social-twitter.svg": "https://www.figma.com/api/mcp/asset/3dcd4373-0cca-4388-9726-722efdc8b27e",
  "social-instagram.svg": "https://www.figma.com/api/mcp/asset/4f6f3981-64c6-4bf0-b89a-074f482e7ab7",
  "social-linkedin.svg": "https://www.figma.com/api/mcp/asset/6bd161b4-9649-4a90-b31a-4386df1892a5",
  "social-youtube.svg": "https://www.figma.com/api/mcp/asset/01395ae3-cd45-4bfa-8596-3bd04cf206bb",
  "collection-women.png": "https://www.figma.com/api/mcp/asset/23d92f83-60f8-4c25-9113-91bfaea18b5b",
  "collection-men.png": "https://www.figma.com/api/mcp/asset/e7f44474-030e-4cc8-8811-57a7c78cf6e6",
  "product-1.png": "https://www.figma.com/api/mcp/asset/2406fba8-71ba-49aa-b9f9-09b7dd0ba65f",
  "product-2.png": "https://www.figma.com/api/mcp/asset/bbce6257-3aa8-4dcb-9870-961e2c1453d1",
  "product-3.png": "https://www.figma.com/api/mcp/asset/c87764d6-486a-4870-87c3-226d8496294a",
  "product-4.png": "https://www.figma.com/api/mcp/asset/158a9e4e-0245-4c7f-bfb9-5b1bf0bc10fa",
  "product-5.png": "https://www.figma.com/api/mcp/asset/a6781695-978a-47b6-abb4-c75c9f751000",
  "category-1.png": "https://www.figma.com/api/mcp/asset/be7cbde4-4433-408b-9983-a5f4dc931186",
  "category-2.png": "https://www.figma.com/api/mcp/asset/4f81b5be-d5a4-42cc-9074-f4c76c523e93",
  "category-3.png": "https://www.figma.com/api/mcp/asset/7bf0a5b1-f86a-487b-abcd-9f4f6e72777d",
  "category-4.png": "https://www.figma.com/api/mcp/asset/a2e80125-c303-4ccb-8023-d9bfd558cbbc",
  "category-5.png": "https://www.figma.com/api/mcp/asset/9b9555a3-e0e8-403f-943c-a98492f76c0e",
  "category-6.png": "https://www.figma.com/api/mcp/asset/3e98d01c-6e76-4482-b4f7-2bf456dfa3de",
  "category-7.png": "https://www.figma.com/api/mcp/asset/a803bf5f-d821-4f85-bebd-9513625a8958",
  "category-8.png": "https://www.figma.com/api/mcp/asset/ade2cd29-765a-4d4b-8222-de831009744b",
  "category-9.png": "https://www.figma.com/api/mcp/asset/8bd3aedb-fd34-48e3-a4c4-923a6eccecf0",
  "gallery-1.png": "https://www.figma.com/api/mcp/asset/a24eaa30-72a0-4fc0-b27a-af99200d2321",
  "gallery-2.png": "https://www.figma.com/api/mcp/asset/8078d35f-088a-4564-8aae-047d8ed8b477",
  "gallery-3.png": "https://www.figma.com/api/mcp/asset/63fd6991-c57f-4cc6-a231-4f09a7e1cf84",
  "gallery-4.png": "https://www.figma.com/api/mcp/asset/306b71ef-8f84-440c-9843-21f301704fed",
  "gallery-5.png": "https://www.figma.com/api/mcp/asset/2cf4e750-c096-43cb-bcc5-cd351fdc2c4c",
  "gallery-6.png": "https://www.figma.com/api/mcp/asset/239d2419-8d10-491c-a7af-e5467272818e",
  "point-1.png": "https://www.figma.com/api/mcp/asset/79b8faf8-66b4-47dd-834d-2f2dee12054e",
  "point-2.png": "https://www.figma.com/api/mcp/asset/a0b8422c-65d2-4ed3-9bb1-cf50c5c25a69",
  "point-3.png": "https://www.figma.com/api/mcp/asset/cc6109b4-7f0c-430e-94c7-1412fa014010",
  "point-4.png": "https://www.figma.com/api/mcp/asset/23ecd9de-d82c-4223-9bdb-7004c43df72b",
  "reward-1.png": "https://www.figma.com/api/mcp/asset/dc822d19-e89b-4205-af93-199142c763dd",
  "reward-2.png": "https://www.figma.com/api/mcp/asset/f14cb7b3-25b5-4f79-87b5-040732ae8025",
  "reward-3.png": "https://www.figma.com/api/mcp/asset/9fd13b3a-72fb-4055-8c56-5731bc945338",
  "reward-4.png": "https://www.figma.com/api/mcp/asset/a5cbdbbe-183e-4cc0-8b87-9242b492b22c",
  "promo-sale.png": "https://www.figma.com/api/mcp/asset/ebe36ca2-cdd8-479e-aef0-5fe8f563b971",
  "about.png": "https://www.figma.com/api/mcp/asset/19e06eba-af34-43c8-a9d0-d93147173b28",
  "blog-1.png": "https://www.figma.com/api/mcp/asset/fc822133-229b-4ab4-862c-cf3dde8dfe01",
  "blog-2.png": "https://www.figma.com/api/mcp/asset/bf098a0d-0c61-4a34-8f6d-cac45f81e168",
  "blog-3.png": "https://www.figma.com/api/mcp/asset/ebe36ca2-cdd8-479e-aef0-5fe8f563b971",
  "logo-footer.png": "https://www.figma.com/api/mcp/asset/266ade89-dbf3-4beb-b7c3-4f8c8e547110",
  "hero.png": "https://www.figma.com/api/mcp/asset/fb121411-c4fc-4844-b4d6-1d4ab5505f79",
  "logo-header.png": "https://www.figma.com/api/mcp/asset/70dd5731-1c39-4c1d-a5f6-e959d9d3778e",
};

const root = join(process.cwd(), "public", "assets", "figma");
await mkdir(root, { recursive: true });

for (const [fileName, url] of Object.entries(assets)) {
  const target = join(root, fileName);
  await mkdir(dirname(target), { recursive: true });
  const response = await fetch(url);
  if (!response.ok || !response.body) {
    throw new Error(`Failed to download ${basename(target)}: ${response.status} ${response.statusText}`);
  }
  await pipeline(response.body, createWriteStream(target));
  console.log(`saved ${fileName}`);
}
