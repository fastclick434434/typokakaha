import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, HeaderButton, platform, IOS, Footer, Group, List, Cell, Avatar } from '@vkontakte/vkui';
import '../style/style.css'
import image3 from '../img/icon.jpg';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon24Download from '@vkontakte/icons/dist/24/download';
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';

const osname = platform();

const About = props => (
	<Panel id={props.id}>
		<PanelHeader
			noShadow left={<HeaderButton onClick={() => window.history.back()}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			О сервисе
		</PanelHeader>
        <img className="Image" style={ { borderRadius: 20 } } src={ image3 } alt="Map"/>
        
 
	</Panel>
);

About.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default About;
