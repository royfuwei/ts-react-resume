import React, { createContext, Fragment, useContext, useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { IPageBaseProps } from '../../domain/interface/pages/base';
import './test.css';
import Button from '@mui/material/Button';
import { TestService } from '../../core/test/test.service';
import { ProgressDIY } from '../../component/ProgressDIY';
import { useRWD } from '../../hook/useRWD';
import { TestForm } from '../../component/TestForm';
import { useParams } from 'react-router';

const Context = createContext('sun nameA');

const TestChildA = ({ name, func }: { name: string, func: React.Dispatch<React.SetStateAction<string>>}) => {
  const onClick = () => {
    func('update child name a');
  };
  return (
    <Fragment>
      <div>test child nameA: {name} </div>
      <Button onClick={onClick} > update name</Button>
      <TestSun/>
    </Fragment>
  );
}

const TestSun = () => {
  const name = useContext(Context);
  return (
    <Fragment>
      <div>test nameA child name: {name} </div>
    </Fragment>
  );
}

function TestPage({ name, count = 0 }: IPageBaseProps) {
  const testService = new TestService();
  const [nameA, setDataA] = useState('nameA');
  const device = useRWD();
  const [newName, stateChangeName] = useState(name);
  const [newCount, addCount] = useState(count);
  const [repoName, stateNewRepoName] = useState('');
  const onClickNewRepoName = async () => {
    const data = await testService.getTestData();
    console.log(data);
    const i = Math.floor(Math.random() * data.length);
    stateNewRepoName(data[i].name);
  };
  const onClickChange = async () => {
    addCount(newCount + 1);
    stateChangeName(`change app ${newCount}`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Page <code>Test</code> and save to reload.
        </p>
        <h3 style={{color:"#354458",fontFamily:"Microsoft JhengHei"}}>device: { device }</h3>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          name: { newName }
        </p>
        <Button variant="text" onClick={onClickChange}>Click Me</Button>
        <p>
          repo name: { repoName }
        </p>
        <Button variant="text" onClick={onClickNewRepoName}>new repoName</Button>
        <TestForm/>
        <ProgressDIY/>
        <p>
          TestChildA: {nameA}
        </p>
        {/* <TestChildA name={nameA}  func={setDataA} /> */}
        <Context.Provider value={nameA}>
          <TestChildA name={nameA}  func={setDataA} />
        </Context.Provider>
      </header>
    </div>
  );
}

export default TestPage;
