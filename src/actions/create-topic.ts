'use server';

import { z } from 'zod';

const createTopicSchema = z.object({
  title: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: 'must be lowercase letters or dashes without spaces',
    }),
  description: z.string().min(10),
});

export async function createTopic(formData: FormData) {
  const result = createTopicSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
  });
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
  }
  // TODO: revalidate homepage
}
