'use client';
import { useState } from 'react';
import Modal from '../shared/ui/modal';

export default function TopicCreateForm() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button onClick={openModal} className="px-4 py-2 border bg-light">
        Topic Create Form
      </button>
      {isOpen && (
        <Modal onClose={closeModal}>
          <div className="flex flex-col gap-4 px-4 py-6 bg-darkest">
            <h2>Create a Topic</h2>
            <input type="text" placeholder="Topic Title" />
            <textarea placeholder="Describe your topic" />
            <button onClick={closeModal} className="">
              Close Modal
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
