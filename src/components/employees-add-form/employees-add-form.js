import './employees-add-form.css';

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form container">
      <h3>Добавьте нового сотрудника</h3>
      <form
        className="add-form d-flex">
        <input type="text"
          className="form-control new-post-label"
          placeholder="Имя Фамилия?" />
        <input type="number"
          className="form-control new-post-label"
          placeholder="ЗП в $?" />
        <button type="submit"
          className="btn btn-outline-light">Добавить</button>
      </form>
    </div>
  )
}

export default EmployeesAddForm;
