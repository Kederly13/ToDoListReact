const Priority = () => {

    return (
        <label for='priority' className={classes.priorityLevel}>
            <h2 className={classes.priorityLevel__title}>Select Priority Level</h2>
            <div className={classes.priority}>
                <div className={classes.priority__item}>
                    <input name='priority' type='radio' className={classes.priority__input}/>
                    <span className={classes.priority__number}>1</span> 
                </div>  
            </div>   
        </label>
    )
};

export { Priority };

