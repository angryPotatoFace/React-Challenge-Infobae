interface IComments {
    id: string,
    message: string
    owner: {
        firstName: string,
        id: string,
        lastName: string
        picture: string,
        title:string
    }
    post: string,
    publishDate: string
}

interface ModalProps {
    show: boolean;
    onClose: () => void;
    comments: IComments[];
  }

const ModalComments: React.FC<ModalProps> = ({ show, onClose, comments }) => {
    if (!show) {
        return null;
      }

    return ( 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
            <div className="bg-white p-6 rounded shadow-lg w-96 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            <button className="absolute top-2 right-2" onClick={onClose}>
                &times;
            </button>
            <div className="space-y-4">
                {comments.map((comment) => (
                <div key={comment.id} className="border-b pb-2">
                    <p className="font-semibold">{`${comment.owner.firstName} ${comment.owner.lastName}`}</p>
                    <p>{comment.message}</p>
                    <p>{comment.publishDate}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
);
}

export default ModalComments;