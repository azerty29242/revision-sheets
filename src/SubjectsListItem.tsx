import Subject from "./Subject";

interface ListItemProps {
    subjectName: string;
}

function ListItem({ subjectName }: ListItemProps) {
    return (
        <>
            <button className="list-group-item list-group-item-action">
                {subjectName}
            </button>
        </>
    );
}

export default ListItem;
