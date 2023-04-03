import '../../../scss/EmailTable.scss';
import { FC, useState, useCallback } from 'react';
import { formatDate, formatTime } from '../../../utils/stringConverter';
import { SentEmail } from '../../../types/OrderTypes';
import DotLoader from '../../cssloader/DotLoader';

interface EmailTableProps {
	data: SentEmail[];
}

const EmailTable: FC<EmailTableProps> = ({ data }) => {
	const [sortField, setSortField] = useState('');
	const [sortAscending, setSortAscending] = useState(true);
	const [expandedRows, setExpandedRows] = useState(new Set());

	const toggleExpanded = (id: number) => {
		const newExpandedRows = new Set(expandedRows);
		if (newExpandedRows.has(id)) {
			newExpandedRows.delete(id);
		} else {
			newExpandedRows.add(id);
		}
		setExpandedRows(newExpandedRows);
	};

	const handleSort = useCallback(
		(field: string) => {
			setSortField(field);
			setSortAscending(!sortAscending);
		},
		[sortAscending],
	);

	const sortedEmails = useCallback(
		(emails: SentEmail[]) => {
			if (data) {
				const sorted = [...emails];
				sorted.sort((a, b) => {
					const first = sortAscending ? a : b;
					const second = sortAscending ? b : a;

					switch (sortField) {
						case 'dateTime':
							return (
								new Date(
									`${first.sent_dt}T${first.sent_tm}`,
								).getTime() -
								new Date(
									`${second.sent_dt}T${second.sent_tm}`,
								).getTime()
							);
						case 'subject':
							return first.subject.title.localeCompare(
								second.subject.title,
							);
						case 'communicationType':
							return first.type.localeCompare(second.type);
						case 'orderNumber':
							return first.order_id - second.order_id;
						default:
							return 0;
					}
				});
				return sorted;
			}
		},
		[sortField, sortAscending, data],
	);

	const handleKeyPress = (
		event: React.KeyboardEvent<HTMLTableHeaderCellElement>,
		field: string,
	) => {
		if (event.key === 'Enter' || event.key === ' ') {
			handleSort(field);
		}
	};

	const handleRowKeyPress = (
		event: React.KeyboardEvent<HTMLTableCellElement>,
		id: number,
	) => {
		if (event.key === 'Enter' || event.key === ' ') {
			toggleExpanded(id);
		}
	};

	const emailsToRender = sortedEmails(data);

	if (!data || emailsToRender === undefined) {
		return (
			<div className='emailTable'>
				<DotLoader />
			</div>
		);
	} else if (data && emailsToRender.length === 0) {
		return (
			<div className='emailTable'>
				<span>No Items</span>
			</div>
		);
	} else {
		return (
			<div className='sentTable'>
				<table>
					<thead>
						<tr>
							<th
								onClick={() => handleSort('dateTime')}
								onKeyDown={event =>
									handleKeyPress(event, 'dateTime')
								}
								tabIndex={0}>
								DATE & TIME
							</th>
							<th
								onClick={() => handleSort('subject')}
								onKeyDown={event =>
									handleKeyPress(event, 'subject')
								}
								tabIndex={0}>
								SUBJECT
							</th>
							<th />
							<th
								onClick={() => handleSort('communicationType')}
								onKeyDown={event =>
									handleKeyPress(event, 'communicationType')
								}
								tabIndex={0}>
								{' '}
								COMMUNICATION TYPE
							</th>
							<th
								onClick={() => handleSort('orderNumber')}
								onKeyDown={event =>
									handleKeyPress(event, 'orderNumber')
								}
								tabIndex={0}>
								{' '}
								ORDER #
							</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{emailsToRender.map((item: SentEmail) => (
							<tr key={item.id}>
								<td
									className={`dateTime long-text${
										expandedRows.has(item.id)
											? ' expanded'
											: ''
									}`}
									onClick={() => toggleExpanded(item.id)}
									onKeyDown={event =>
										handleRowKeyPress(event, item.id)
									}
									tabIndex={0}>
									<div>{formatDate(item.sent_dt)}</div>
									<div>{formatTime(item.sent_tm)}</div>
								</td>
								<td
									className='subject'
									onClick={() => toggleExpanded(item.id)}
									onKeyDown={event =>
										handleRowKeyPress(event, item.id)
									}
									tabIndex={0}>
									<div
										className={`subjectors long-text ${
											expandedRows.has(item.id)
												? 'expanded'
												: ''
										}`}>
										<div>{item.subject.title}</div>
										<div>{item.subject.email}</div>
									</div>
								</td>
								<td />
								<td
									className={`long-text${
										expandedRows.has(item.id)
											? ' expanded'
											: ''
									}`}
									onClick={() => toggleExpanded(item.id)}
									onKeyDown={event =>
										handleRowKeyPress(event, item.id)
									}
									tabIndex={0}>
									{item.type}
								</td>
								<td
									className={`long-text${
										expandedRows.has(item.id)
											? ' expanded'
											: ''
									}`}
									onClick={() => toggleExpanded(item.id)}
									onKeyDown={event =>
										handleRowKeyPress(event, item.id)
									}
									tabIndex={0}>
									{item.order_id}
								</td>
								<td>
									<button type='button'>RESEND</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
};

export default EmailTable;
