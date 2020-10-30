/*
 * @Author: your name
 * @Date: 2020-10-30 10:44:39
 * @LastEditTime: 2020-10-30 10:49:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-axios/test/ts-axios.test.ts
 */
import DummyClass from '../src/ts-axios'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass)
  })
})
