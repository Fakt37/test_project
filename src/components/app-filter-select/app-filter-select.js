const AppFilterSelect = ({ nameSelect, value, change, option }) => {
    return (
        <select name={nameSelect} value={value} onChange={change}>
            {option}
        </select>
    );
};

export default AppFilterSelect;
