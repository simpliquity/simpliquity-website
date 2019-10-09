import _ from "underscore";
import { DefaultLocale } from "./constants.js";
import { getTranslation } from "./locale.js";
import LocaleContext from "./LocaleContext.js";
import React from "react";

const translateParts = ({ label, locale, options }) => {
    const word = getTranslation(label, locale);
    if (_.isEmpty(options)) return [word || ""];
    const parts = _.reduce(
        options,
        (_parts, value, key) => {
            return _.reduce(
                _parts,
                (memo, part) => {
                    if (!part.isText) {
                        memo.push(part);
                        return;
                    }
                    const pattern = `{${key}}`;
                    const pos = part.value.indexOf(pattern);
                    if (pos >= 0) {
                        if (pos > 0) {
                            memo.push({
                                isText: true,
                                value: part.value.substring(0, pos)
                            });
                        }
                        memo.push({
                            isText: false,
                            value
                        });
                        if (pos + pattern.length < part.value.length) {
                            memo.push({
                                isText: true,
                                value: part.value.substring(
                                    pos + pattern.length,
                                    part.value.length
                                )
                            });
                        }
                    }
                    return memo;
                },
                []
            );
        },
        [
            {
                isText: true,
                value: word
            }
        ]
    );
    return _.pluck(parts, "value");
};

const translate = props => {
    const parts = translateParts({
        locale: props.locale || DefaultLocale,
        ...props
    });
    return parts.join("");
};

const I18nContent = props => {
    const parts = translateParts(props);
    return <span>{React.Children.toArray(parts)}</span>;
};

const I18n = props => {
    return (
        <LocaleContext.Consumer>
            {({ locale }) => (
                <I18nContent
                    label={props.label}
                    options={props.options}
                    locale={locale}
                />
            )}
        </LocaleContext.Consumer>
    );
};

export default I18n;
export { translate };
