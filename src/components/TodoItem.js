import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component{
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
        };

    markComplete = (e) => {
        console.log(this.props)
    };

    //при изменении срока выполнения задачи (приоритетности)
    // onChange = (e) => this.setState({
    //     [e.target.name]: e.target.value
    // });

    render() {
        const {id, title, period, completed} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p align='left'>
                    <input type="checkbox"
                           onChange={this.props.markComplete.bind(this, id)} checked={ completed ? 'checked': '' }/> {' '}
                    { title }{' '}<span style={{color: 'blue', font: '30pt'}}>{ period }</span>{' '}
                    <button onClick={this.props.delTodo.bind(this, id)}
                            style={btnStyle}
                            class="btn btn-outline-danger" name={id}>х</button>
                </p>
            </div>
        )
    }
}
const btnStyle = {
    // background: '#ff0000',
    // color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius:'50%',
    cursor: 'pointer',
    float:'right'
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;