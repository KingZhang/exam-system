interface ConfigObject {
    admin:   string;
    usernameRegex:  string;
}
const projectConfig: ConfigObject = {
    admin: 'admin',
    usernameRegex: '.*'
    // usernameRegex: '^[a-z]{1}[0-9]{8}$',
};

export default projectConfig;
