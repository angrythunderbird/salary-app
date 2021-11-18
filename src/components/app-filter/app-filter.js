import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group app-filter">
      <button
        className="btn btn-light"
        type="button"
      >
        Все сотрудники
      </button>
      <button
        className="btn btn-outline-light"
        type="button"
      >
        На повышение
      </button>
      <button
        className="btn btn-outline-light"
        type="button"
      >
        ЗП более 1000$
      </button>
    </div>
  )
}

export default AppFilter;
