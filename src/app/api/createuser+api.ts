import { prisma } from "@/utils/prisma";
import { createId } from "@paralleldrive/cuid2";

interface CreateUserDTO{
  id:string
   email:string
   name:string

}
export async function POST(request: Request, response: Response) {
  const {id, email, name} : CreateUserDTO = await request.json();

  await prisma.users.create({
  data:{
    id: id || createId(),
    email: email || '',
    name: name || ''
  }
  })

  return new Response('Created', {
    status: 200,
  });
}
