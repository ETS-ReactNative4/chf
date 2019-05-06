import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { Link } from 'react-router-dom';
import { PageLayout, ScrollToTop, LinkList } from '../../common/components/global';
import settings from '../../../../../../settings';
import '../styles/services-view.scss';

class ServicesView extends React.Component {
  render() {
    // const {  } = this.props;

    const renderMetaData = () => (
      <Helmet
        title={`${settings.app.name}:  Quality Home Fitness Equipment for Sale.`}
        meta={[
          {
            name: 'description',
            content: `Shop local and save!  CA Home Fitness offers the best brands in home fitness equipment at the guaranteed best prices, including treadmills, ellipticals, bikes, rowers, strength training equipment, and more.  `
          },
          {
            name: 'keywords',
            content: `Treadmill, Elliptical machines, Cross Trainer, Exercise Bike, Home Gym, Rower, Commercial Equipment, Life Fitness, Precor, Spirit Fitness, Inspire Fitness, GoFit, Helix`
          }
        ]}
      />
    );
    const linkList = [
      { name: 'Contact Us', location: '/contact', type: 'internal' },
      { name: 'Services', location: '/services', type: 'internal' },
      { name: 'Maintenance & Repairs', location: '/maintenance', type: 'internal' },
      { name: 'Delivery & Installations', location: '/delivery', type: 'internal' }
    ];
    return (
      <PageLayout>
        {renderMetaData()}
        <ScrollToTop />
        <div className="services-view sidebar-layout">
          <section className="services-view__sidebar sidebar-layout__sidebar">
            <LinkList links={linkList} />
          </section>
          <section className="services-view__content sidebar-layout__content">
            <p className="sidebar-layout__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Laoreet sit amet cursus sit amet. Venenatis lectus magna fringilla urna porttitor
              rhoncus dolor purus non. Vestibulum sed arcu non odio euismod lacinia at quis risus. Diam sollicitudin
              tempor id eu nisl nunc. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Nec sagittis
              aliquam malesuada bibendum arcu vitae elementum curabitur. Condimentum id venenatis a condimentum vitae
              sapien pellentesque habitant morbi. Ut diam quam nulla porttitor massa id neque. Purus non enim praesent
              elementum facilisis leo vel fringilla. Integer malesuada nunc vel risus commodo viverra maecenas. Neque
              volutpat ac tincidunt vitae semper quis lectus nulla. Nec sagittis aliquam malesuada bibendum arcu vitae.
            </p>
            <p>
              A lacus vestibulum sed arcu non odio euismod lacinia at. Accumsan in nisl nisi scelerisque eu ultrices
              vitae auctor eu. Dolor magna eget est lorem ipsum. Dictum fusce ut placerat orci nulla pellentesque
              dignissim enim. Nulla aliquet enim tortor at auctor urna. Sociis natoque penatibus et magnis dis. Ultrices
              gravida dictum fusce ut placerat orci nulla. Consectetur lorem donec massa sapien faucibus et molestie ac
              feugiat. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Non quam lacus suspendisse
              faucibus interdum posuere lorem. At ultrices mi tempus imperdiet nulla. Odio pellentesque diam volutpat
              commodo sed egestas egestas fringilla. Rutrum tellus pellentesque eu tincidunt. Quis varius quam quisque
              id diam vel quam. Purus in massa tempor nec feugiat nisl pretium fusce. Placerat orci nulla pellentesque
              dignissim enim sit amet. Facilisi cras fermentum odio eu feugiat. Tellus in metus vulputate eu scelerisque
              felis imperdiet proin. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eu mi bibendum
              neque egestas congue quisque egestas diam. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.
            </p>
            <p>
              A lacus vestibulum sed arcu non odio euismod lacinia at. Accumsan in nisl nisi scelerisque eu ultrices
              vitae auctor eu. Dolor magna eget est lorem ipsum. Dictum fusce ut placerat orci nulla pellentesque
              dignissim enim. Nulla aliquet enim tortor at auctor urna. Sociis natoque penatibus et magnis dis. Ultrices
              gravida dictum fusce ut placerat orci nulla. Consectetur lorem donec massa sapien faucibus et molestie ac
              feugiat. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Non quam lacus suspendisse
              faucibus interdum posuere lorem. At ultrices mi tempus imperdiet nulla. Odio pellentesque diam volutpat
              commodo sed egestas egestas fringilla. Rutrum tellus pellentesque eu tincidunt. Quis varius quam quisque
              id diam vel quam. Purus in massa tempor nec feugiat nisl pretium fusce. Placerat orci nulla pellentesque
              dignissim enim sit amet. Facilisi cras fermentum odio eu feugiat. Tellus in metus vulputate eu scelerisque
              felis imperdiet proin. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eu mi bibendum
              neque egestas congue quisque egestas diam.
            </p>
            <p>
              Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Odio ut sem nulla pharetra diam sit amet.
              Massa enim nec dui nunc. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. In
              ante metus dictum at tempor commodo ullamcorper a. Vitae elementum curabitur vitae nunc sed velit
              dignissim. In hendrerit gravida rutrum quisque. Aliquam ultrices sagittis orci a scelerisque purus. In hac
              habitasse platea dictumst vestibulum. Molestie ac feugiat sed lectus. Dictumst quisque sagittis purus sit
              amet volutpat consequat. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Non nisi est
              sit amet facilisis magna etiam tempor orci. Pharetra vel turpis nunc eget lorem. Tellus elementum sagittis
              vitae et leo. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Non odio euismod lacinia at quis
              risus sed. Eu augue ut lectus arcu. Consectetur purus ut faucibus pulvinar elementum.
            </p>
            <p>
              Blandit massa enim nec dui nunc mattis. Tellus elementum sagittis vitae et leo duis ut. Neque gravida in
              fermentum et sollicitudin ac orci phasellus. Ut consequat semper viverra nam libero justo laoreet. Feugiat
              nisl pretium fusce id velit ut tortor. In hac habitasse platea dictumst quisque sagittis purus sit.
              Pretium quam vulputate dignissim suspendisse in. Amet justo donec enim diam vulputate ut pharetra sit.
              Tincidunt dui ut ornare lectus. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ut
              tristique et egestas quis. Convallis a cras semper auctor neque.
            </p>
            <p>
              Commodo ullamcorper a lacus vestibulum sed arcu non odio. Turpis in eu mi bibendum neque. Dolor morbi non
              arcu risus. At tellus at urna condimentum mattis pellentesque id. Neque viverra justo nec ultrices dui
              sapien eget mi. Penatibus et magnis dis parturient montes. Non arcu risus quis varius quam quisque id diam
              vel. Mauris pharetra et ultrices neque ornare. Neque laoreet suspendisse interdum consectetur libero id
              faucibus nisl. Venenatis urna cursus eget nunc scelerisque viverra. Dignissim sodales ut eu sem integer
              vitae justo eget. Eget est lorem ipsum dolor sit amet consectetur. Volutpat lacus laoreet non curabitur.
              Arcu vitae elementum curabitur vitae nunc sed. Duis ultricies lacus sed turpis. Eget gravida cum sociis
              natoque penatibus et magnis. Tincidunt vitae semper quis lectus nulla at. Sed cras ornare arcu dui vivamus
              arcu felis bibendum ut.
            </p>
          </section>
        </div>
      </PageLayout>
    );
  }
}

ServicesView.defaultProps = {};
ServicesView.propTypes = {};

export default ServicesView;
