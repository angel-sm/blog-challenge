/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable n/no-path-concat */
import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection'

const container = new ContainerBuilder()
const loader = new YamlFileLoader(container)

loader.load(`${__dirname}/application.yaml`)

export default container
