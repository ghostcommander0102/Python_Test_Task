import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateExpression } from './store/calculatorActions';
import { AppState, AppDispatch } from './store';
import "./App.scss";

type CalculationPart = {
	number: number;
	operator?: string; // operator is optional as the first number won't have an operator before it
};

const Calculator: React.FC = () => {
	const [parts, setParts] = useState<CalculationPart[]>([{ number: 0 }]);
	const [count, setCount] = useState<number>(2);
	const dispatch = useDispatch<AppDispatch>();
    const { result, color, error } = useSelector((state: AppState) => state.calculator);

	useEffect(() => {
		setParts(parts => {
			const newParts = parts.slice(0, count);
			while (newParts.length < count) {
				newParts.push({ number: 0, operator: '+' });
			}
			return newParts;
		});
	}, [count]);

	const handleNumberChange = (index: number, value: number) => {
		setParts(parts => parts.map((part, i) => i === index ? { ...part, number: value } : part));
	};

	const handleOperatorChange = (index: number, value: string) => {
		setParts(parts => parts.map((part, i) => i === index ? { ...part, operator: value } : part));
	};

	const calculate = async () => {
		const expression = parts.map(part => `${part.operator ?? ''} ${part.number}`).join(' ').trim();
		dispatch(calculateExpression(expression));
	};

	return (
		<div className='calculator-container'>
			<input
				type="number"
				min="2"
				value={count}
				onChange={e => setCount(parseInt(e.target.value) || 2)}
			/>
			{parts.map((part, index) => (
				<div key={index}>
					{index !== 0 && (
						<select
							value={part.operator}
							onChange={e => handleOperatorChange(index, e.target.value)}
						>
							<option value="+">+</option>
							<option value="-">-</option>
							<option value="*">*</option>
							<option value="/">/</option>
							<option value="^">^</option>
						</select>
					)}
					<input
						type="number"
						value={part.number}
						onChange={e => handleNumberChange(index, parseInt(e.target.value))}
					/>
				</div>
			))}
			<div style={{ color: color }}>= {error ? 'Error' : result}</div>
			<button onClick={calculate}>Calculate</button>
		</div>
	);
};

export default Calculator;
