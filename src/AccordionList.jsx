import { Component, createElement } from "react";

import Accordion from 'react-native-collapsible/Accordion';

export class AccordionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSections: [],
            sections: []
        }
        this._renderSectionTitle = this._renderSectionTitle.bind(this);
        this._renderContent = this._renderContent.bind(this);
        this._updateSections = this._updateSections.bind(this);
    }

    _renderSectionTitle = (section) => this.props.headerClosed(section);

    _renderContent = (section) => this.props.content(section);

    _updateSections = (activeSections) => {
        this.setState({ activeSections: activeSections });
    }

    render() {
        const { data } = this.props;
        const loading = data.status === "loading";
        if (!loading) {
            this.setState({ sections: data.items });
        }
        return (
            <Accordion
                sections={this.state.sections}
                activeSections={this.state.activeSections}
                renderHeader={this._renderSectionTitle}
                renderContent={this._renderContent}
                onChange={this._updateSections}
            />
        )
    }
}
