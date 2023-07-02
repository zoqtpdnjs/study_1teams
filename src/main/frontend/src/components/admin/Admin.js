import '../../css/admin/Admin.css';
import Header from './components/admin/Header'
import Menu from './components/admin/Menu'
import Contents from './components/admin/Contents'

function Admin() {
    return (
        <div className="App">
            <Header/>
            <div className='wrap'>
                <Menu/>
                <Contents/>
            </div>
        </div>
    );
}

export default Admin;
