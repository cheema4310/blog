'use client';
import { useState } from 'react';
import Modal from '../shared/ui/modal';
import * as actions from '@/actions';

export default function TopicCreateForm() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    actions.createTopic(formData);
  };
  return (
    <div>
      <button onClick={openModal} className="px-4 py-2 border bg-light">
        Topic Create Form
      </button>
      {isOpen && (
        <Modal onClose={closeModal}>
          <div className="px-6 py-8 bg-darkest rounded-lg">
            <h2 className="text-center text-xl py-5">Create a Topic</h2>
            <form action={actions.createTopic} className="flex flex-col gap-4">
              <input
                name="title"
                type="text"
                placeholder="Topic Title"
                className="p-2 bg-darker text-lg text-lightest rounded-md outline-none focus:bg-dark"
              />
              <textarea
                name="description"
                placeholder="Describe your topic"
                rows={5}
                className="p-2 bg-darker text-lg text-lightest rounded-md outline-none focus:bg-dark resize-none"
              />
              <button
                type="submit"
                className="border border-dark py-1 text-lg rounded-md shadow-md shadow-darker mb-2 transition hover:bg-darker "
              >
                submit
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
