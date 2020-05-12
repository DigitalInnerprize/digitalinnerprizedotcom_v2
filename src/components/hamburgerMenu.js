import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function MenuItem({ open, delay, onClick, children }) {
    const [hover, setHover] = useState(false);

    const styles = {
        container: {
            opacity: open ? 1 : 0,
            animation: '1s appear forwards',
            animationDelay: delay,
        },
        menuItem: {
            margin: '15px 5%',
            cursor: 'pointer',
            color: hover ? 'rgba(9, 12, 8, 0.6)' : '#090C08',
            transition: 'color 0.2s ease-in-out',
            animation: '0.5s slideIn forwards',
            animationDelay: delay,
        },
    };

    return (
        <div style={styles.container}>
            <div
                style={styles.menuItem}
                onMouseEnter={() => setHover(!hover)}
                onMouseLeave={() => setHover(!hover)}
                onClick={onClick}
            >
                {children}
            </div>
            <div style={styles.line} />
        </div>
    );
}

MenuItem.propTypes = {
    open: PropTypes.bool,
    delay: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
};

/* Menu.jsx */
export function Menu({ handleOpen, children }) {
    const [open, setOpen] = useState(null);

    useEffect(() => {
        if (handleOpen) {
            setOpen(handleOpen);
        } else {
            setOpen(false);
        }
    }, [handleOpen]);

    const styles = {
        container: {
            position: 'fixed',
            top: 0,
            left: 0,
            height: open ? '100%' : 0,
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            background: '#f9f9f9',
            opacity: 0.95,
            color: '#fafafa',
            transition: 'height 0.3s ease',
            zIndex: 10,
        },
        menuList: {
            paddingTop: '6rem',
            maxWidth: '1300px',
            width: '100%',
            textAlign: 'center',
            height: '100%',
        },
    };
    return <div style={styles.container}>{open ? <div style={styles.menuList}>{children}</div> : null}</div>;
}

Menu.propTypes = {
    handleOpen: PropTypes.bool,
    children: PropTypes.node,
};

/* MenuButton.jsx */
export function MenuButton({ handleOpen, handleColor, onClick }) {
    const [open, setOpen] = useState(null);
    const [color, setColor] = useState(null);

    useEffect(() => {
        if (handleOpen) {
            setOpen(open);
        } else {
            setOpen(false);
        }
    }, [handleOpen]);

    useEffect(() => {
        if (handleColor) {
            setColor(handleColor);
        } else {
            setColor('white');
        }
    }, [handleColor]);

    const styles = {
        container: {
            height: '32px',
            width: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '4px',
            zIndex: 15,
            position: 'relative',
        },
        line: {
            height: '2px',
            width: '20px',
            background: color,
            transition: 'all 0.2s ease',
        },
        lineTop: {
            transform: open ? 'rotate(45deg)' : 'none',
            transformOrigin: 'top left',
            marginBottom: '5px',
        },
        lineMiddle: {
            opacity: open ? 0 : 1,
            transform: open ? 'translateX(-16px)' : 'none',
        },
        lineBottom: {
            transform: open ? 'translateX(-1px) rotate(-45deg)' : 'none',
            transformOrigin: 'top left',
            marginTop: '5px',
        },
    };

    return (
        <div style={styles.container} onClick={onClick ? onClick : () => setOpen(!open)}>
            <div style={{ ...styles.line, ...styles.lineTop }} />
            <div style={{ ...styles.line, ...styles.lineMiddle }} />
            <div style={{ ...styles.line, ...styles.lineBottom }} />
        </div>
    );
}

MenuButton.propTypes = {
    handleOpen: PropTypes.bool,
    handleColor: PropTypes.string,
    onClick: PropTypes.func,
};
