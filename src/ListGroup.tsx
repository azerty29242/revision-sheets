import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

interface Props {
    items: Array<string>;
}

const ListGroup = ({ items }: Props) => {

    return (
        <div className="d-flex flex-column">
        {items.map((item, index) => {
            return (<a key={index} className="icon-link icon-link-hover">
                {item}
                <svg className="bi" aria-hidden="true"><use xlinkHref={bootstrapIcons + "#arrow-right"}></use></svg>
            </a>)
        })}
        </div>
    )
}

export default ListGroup