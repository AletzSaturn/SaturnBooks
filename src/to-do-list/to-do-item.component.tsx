interface ItemProps {
    name: string;
    done: boolean;
}

export default function ToDoItem(props: ItemProps) {

    return (
        <>
            <div className="flex justify-between">
                <span>{props.name}</span>
                <button>X</button>
                <input type="checkbox" className='cursor-pointer' defaultChecked={props.done === true} />
            </div>
        </>
    );
}