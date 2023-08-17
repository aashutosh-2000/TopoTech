import { Route, Routes, Switch } from 'react-router-dom';
import Hearder from './Components/Hearder';
import { theme } from 'antd';
import Content from './Components/Content';
import Table from './Components/Table';
import Reject from './Components/Reject';
const App = () => {
  return (
    <>
      {/* <Switch> */}
        {/* <Route /> */}
        <Hearder />
        <Content />
        <Table />
        <Reject />
      {/* </Switch> */}
    </>
  )
}
export default App
