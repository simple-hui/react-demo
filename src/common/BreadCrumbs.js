import React from 'react';

class BreadCrumbs extends React.Component {
	render() {
		return (
			<div className="crumbs">
				<ul className="clearfix">
					{
						this.props.Crumbs.map((item)=> {
							return  <li key={item.name} className="crumbs-info pull-left">
												<a href={item.src}>{item.name}</a>
												<span>></span>
											</li>
						})
					}
				</ul>
			</div>
		);
	}
}
export default BreadCrumbs;