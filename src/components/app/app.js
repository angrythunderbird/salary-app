import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

// const Xz = async () => await EmployeesList;
// console.log(Xz());

function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel container">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList/>
      <EmployeesAddForm />
    </div>
  )
}

export default App;
