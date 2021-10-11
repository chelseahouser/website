import React, { Component } from 'react';

import About from '../components/about';
import Books from '../components/books';
import Resume from '../components/resume';
import Blog from '../components/blog';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

const drawerWidth = 240;

const styles = (theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	avatar: {
		height: 110,
		width: 100,
		flexShrink: 0,
		flexGrow: 0,
		marginTop: 20
	},
	uiProgess: {
		position: 'fixed',
		zIndex: '1000',
		height: '31px',
		width: '31px',
		left: '50%',
		top: '35%'
	},
	toolbar: theme.mixins.toolbar
});

class home extends Component {
	state = {
		render: "home"
	};

	loadHomePage = (event) => {
		this.setState({ render: "home" });
	};
    loadResumePage = (event) => {
		this.setState({ render: "resume" });
	};
    loadBlogPage = (event) => {
		this.setState({ render: "blog" });
	};
    loadBooksPage = (event) => {
		this.setState({ render: "books" });
	};

	constructor(props) {
		super(props);

		this.state = {
			uiLoading: false,
			imageLoading: false
		};
	}

	componentWillMount = () => {
	};

    getComponent = () => {
        switch(this.state.render){
            case "resume":
                return <Resume />;
            case "blog":
                return <Blog />;
            case "books":
                return <Books />;
            default:
                return <About />;
        }
    };

	render() {
		const { classes } = this.props;	
		if (this.state.uiLoading === true) {
			return (
				<div className={classes.root}>
					{this.state.uiLoading && <CircularProgress size={150} className={classes.uiProgess} />}
				</div>
			);
		} else {
			return (
				<div className={classes.root}>
					<CssBaseline />
					<AppBar position="fixed" className={classes.appBar}>
						<Toolbar>
							<Typography variant="h6" noWrap onClick={this.loadHomePage}>
								Chelsea Houser
							</Typography>
						</Toolbar>
					</AppBar>
					<Drawer
						className={classes.drawer}
						variant="permanent"
						classes={{
							paper: classes.drawerPaper
						}}
					>
						<div className={classes.toolbar} />
						<Divider />
						<List>
                            <ListItem button key="Resume" onClick={this.loadResumePage}>
								<ListItemText primary="Resume" />
							</ListItem>
                            <ListItem button key="Blog" onClick={this.loadBlogPage}>
								<ListItemText primary="Blog" />
							</ListItem>
                            <ListItem button key="Books" onClick={this.loadBooksPage}>
								<ListItemText primary="Books" />
							</ListItem>
						</List>
					</Drawer>

					<div>
                        {this.getComponent()}
                    </div>
				</div>
			);
		}
	}
}

export default withStyles(styles)(home);