import TopicCreateForm from '@/components/topics/topic-create-form';

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">Top Posts</div>
        <div className="">
          <TopicCreateForm />
        </div>
      </div>
    </div>
  );
}
