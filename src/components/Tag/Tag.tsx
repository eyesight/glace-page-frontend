import './Tag.scss';

type Props = {
    tagItems:  Array<TagProp>
}

type TagProp = { 
    name: string 
}

const Tag = ({ tagItems }: Props) => {
    return (
        <ul className="tags">
            {
                tagItems?.map((item, index) =>
                (
                    <li key={index} className="tags__item">{item.name}</li>
                ))
            }
        </ul>
    );
};

export default Tag;