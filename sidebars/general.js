/**
 * Copyright (c) Moodle Pty Ltd.
 *
 * Moodle is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Moodle is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    community: [
        'community/intro',
        'community/mission',
        'community/roadmap',
        {
            label: 'Meetings',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'community/meetings',
                },
            ],
            link: {
                type: 'doc',
                id: 'community/meetings',
            },
        },
        'community/research',
    ],
    process: [
        {
            label: 'Process',
            type: 'category',
            items: [
                {
                    label: 'Development',
                    type: 'doc',
                    id: 'development/index',
                },
                'development/process/peer-review',
                'development/process/integration-review',
                {
                    label: 'Testing',
                    type: 'category',
                    items: [
                        {
                            label: 'Integrated issues',
                            type: 'doc',
                            id: 'development/process/testing/integrated-issues',
                        },
                        {
                            label: 'Quality Assurance (QA)',
                            type: 'doc',
                            id: 'development/process/testing/qa',
                        },
                    ],
                    link: {
                        type: 'doc',
                        id: 'development/process/testing',
                    },
                }
            ],
            link: {
                type: 'doc',
                id: 'development/process',
            },
        },
        {
            label: 'Tracker',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'development/tracker',
                },
            ],
            link: {
                type: 'doc',
                id: 'development/tracker',
            },
        },
    ],
    policies: [
        {
            label: 'Policies',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'development/policies',
                },
            ],
        },
    ],

    documentation: [
        'documentation/index',
        'documentation/contributing',
        'documentation/code-of-conduct',
        'documentation/style-guides',
    ],
};

module.exports = sidebars;
