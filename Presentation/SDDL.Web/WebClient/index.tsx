import * as React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';

const Hello = ({ world }: { world: string }) =>
    <>
        <h1>Hello {world}</h1>
        <img style={{ maxWidth: "300px" }} src="https://i.ytimg.com/vi/BpPN8MfUvn0/maxresdefault.jpg" />
    </>;

render(<Hello world="ZA WARUDO" />, document.getElementById("app"));