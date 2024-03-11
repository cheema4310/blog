interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
export default function Modal(props: ModalProps) {
  // new trick below
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'backdrop') {
      props.onClose();
    }
  };
  // new trick above

  return (
    <div
      className="fixed inset-0 bg-darkest bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
      id="backdrop"
    >
      {props.children}
    </div>
  );
}
