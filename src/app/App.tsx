import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;
