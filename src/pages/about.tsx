import Layout from '../layout/layout';

const About = () => {
    return (
        <Layout>
            <div style={{ padding: '2rem' }}>
                <h1>About Space News</h1>
                <p>
                    Welcome to Space News! This website provides the latest news and updates
                    about space exploration, astronomy, and related topics.
                </p>
                <p>
                    Our content is sourced from the Spaceflight News API, bringing you
                    up-to-date information about space missions, discoveries, and advancements
                    in space technology.
                </p>
                <p>
                    This website was developed as part of a web development course assignment
                    using Next.js and Ant Design.
                </p>
            </div>
        </Layout>
    );
};

export default About;