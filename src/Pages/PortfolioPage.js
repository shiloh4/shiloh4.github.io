import * as React from 'react';
import Portfolio from '../components/Portfolio/portfolio';

function PortfolioUsage() {
    return <Portfolio></Portfolio>
  }

export default function PortfolioPage() {
    return (
        <div>
            <PortfolioUsage />
        </div>
    );
}