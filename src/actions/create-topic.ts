'use server';

export async function createTopic(formData: FormData) {
  const title = formData.get('title');
  const description = formData.get('description');
  console.log(title, description);

  // TODO: revalidate homepage
}
