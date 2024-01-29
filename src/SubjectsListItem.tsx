interface ListItemProps {
    subjectName: string;
}

function ListItem({ subjectName }: ListItemProps) {
    return (
        <>
            <a href="javascript:void(0)">{subjectName}</a>
        </>
    );
}

export default ListItem;
