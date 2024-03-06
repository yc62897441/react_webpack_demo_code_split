// 參考來源：Day014 X Code Splitting & Dynamic Import
// https://ithelp.ithome.com.tw/users/20113277/ironman/3877?page=1
// Demo 原始碼：
// https://github.com/kylemocode/it-ironman-2021/tree/master/code-splitting-demo

import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './containers/HomePage.jsx'

// 使用 React 動態載入
const A = lazy(() => import('./containers/A.jsx'))
const B = lazy(() => import('./containers/B.jsx'))
const C = lazy(() => import('./containers/C.jsx'))

import Layout from './component/Layout.jsx'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/A" element={<A />} />
                        <Route path="/B" element={<B />} />
                        <Route path="/C" element={<C />} />
                    </Routes>
                </Suspense>
            </Layout>
        </BrowserRouter>
    )
}

export default App
