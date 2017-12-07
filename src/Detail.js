import React from 'react';

import BreadCrumbs from './common/BreadCrumbs';

const Crumbs = [{
	name: '营销服务平台',
	src: ''
}, {
	name: '线索/申请管理',
	src: 'www.baidu.com'
}, {
	name: '线索详情',
	src: ''
}]


class Detail extends React.Component {
	render() {
		return (
			<div className="outer-bg">
				<BreadCrumbs Crumbs= {Crumbs} />
				<div className="info-bg">
					detail
				</div>
			</div>
		);
	}
}



export default Detail;