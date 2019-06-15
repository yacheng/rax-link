import {createElement, render} from 'rax';
import * as DriverDOM from 'driver-dom';
import { isWeex } from 'universal-env';
import * as DriverWeex from 'driver-weex';
import Link from '../src/index';
import Text from 'rax-text';

render(<Link href={"//www.taobao.com"} ><Text style={{
  fontSize: 14,
  color: '#333333'
}}>跳转</Text></Link>, document.body, { driver: isWeex ? DriverWeex : DriverDOM });
