import todoListImage from "./assets/TodoList.PNG";

const Header = () => {
    return (
        <header>
            <div className="header-title-and-logo">
                {" "}
                <img
                    className="header-todo-list-image"
                    src={todoListImage}
                    alt="Todo List"
                />{" "}
                <span className="header-title">Todo List</span>
            </div>
            <div className="header-horizontal-line"></div>
        </header>
    );
};

export default Header;
