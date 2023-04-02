import '../../../scss/Sent.scss';
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

	console.log(data, 'test');

	const handleSort = useCallback(
		(field: string) => {
			setSortField(field);
			setSortAscending(!sortAscending);
		},
		[sortAscending],
	);

	const sortedEmails = useCallback(
		(emails: SentEmail[]) => {
			return emails.sort((a, b) => {
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
		},
		[sortField, sortAscending],
	);

	const emailsToRender = sortedEmails(data);

	if (!data) {
		return (
			<div className='emailTable'>
				<DotLoader />
			</div>
		);
	} else if (emailsToRender.length === 0) {
		return (
			<div className='emailTable'>
				<span>No Items</span>
			</div>
		);
	} else {
		return (
			<div className='sentTable'>
				{emailsToRender ? (
					<table>
						<thead>
							<tr>
								{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<th onClick={() => handleSort('dateTime')}>
									DATE & TIME
								</th>
								{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<th onClick={() => handleSort('subject')}>
									SUBJECT
								</th>
								<th />
								{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<th
									onClick={() =>
										handleSort('communicationType')
									}>
									COMMUNICATION TYPE
								</th>
								{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<th onClick={() => handleSort('orderNumber')}>
									ORDER #
								</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{emailsToRender.map((item: SentEmail) => (
								<tr key={item.id}>
									<td className='dateTime'>
										<div>{formatDate(item.sent_dt)}</div>
										<div>{formatTime(item.sent_tm)}</div>
									</td>
									<td className='subject'>
										<div>{item.subject.title}</div>
										<div>{item.subject.email}</div>
									</td>
									<td />
									<td>{item.type}</td>
									<td>{item.order_id}</td>
									<td>
										<button type='button'>RESEND</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<div className='emailTable'>
						<DotLoader />
					</div>
				)}
			</div>
		);
	}
};

export default EmailTable;
