import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import I18n from "./locale/I18n.js";
import Link from "@material-ui/core/Link";
import Part from "./Part.js";
import PricingWarning from "./PricingWarning.js";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    cardHeader: {
        backgroundColor: theme.palette.grey[200]
    },
    cardPricingWrapper: {
        marginBottom: "20px" //theme.spacing(2)
    },
    cardPricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline"
    },
    cardPricingItem: {}
});

const _PricingCard = ({ classes, tier }) => {
    return (
        // Enterprise card is full width at sm breakpoint
        <Grid
            item
            key={tier.id}
            xs={12}
            sm={tier.id === "organisation" ? 12 : 6}
            md={tier.id === "organisation" ? 12 : 4}
        >
            <Card>
                <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    className={classes.cardHeader}
                />
                <CardContent>
                    <div className={classes.cardPricingWrapper}>
                        <div className={classes.cardPricing}>
                            {tier.isPriceFrom && (
                                <Typography variant="h6" color="textSecondary">
                                    <I18n label="Pricing_from" />
                                </Typography>
                            )}
                            &nbsp;
                            <Typography
                                component="h2"
                                variant="h3"
                                color="textPrimary"
                            >
                                {tier.price}.-
                            </Typography>
                        </div>
                        <div className={classes.cardPricing}>
                            <Typography variant="h6" color="textSecondary">
                                <I18n label="Pricing_perMonth" /> (CHF/€)
                            </Typography>
                        </div>
                    </div>
                    <ul>
                        {tier.description.map(line => {
                            return (
                                <Typography
                                    component="li"
                                    variant="subtitle1"
                                    align="center"
                                    key={line.key}
                                >
                                    {line.content}
                                </Typography>
                            );
                        })}
                    </ul>
                </CardContent>
                {tier.buttonLink ? (
                    <Link href={tier.buttonLink}>
                        <CardActions>
                            <Button
                                fullWidth
                                variant={tier.buttonVariant}
                                color="primary"
                            >
                                {tier.buttonText}
                            </Button>
                        </CardActions>
                    </Link>
                ) : (
                    <CardActions>
                        <Button
                            fullWidth
                            variant={tier.buttonVariant}
                            color="primary"
                        >
                            {tier.buttonText}
                        </Button>
                    </CardActions>
                )}
            </Card>
        </Grid>
    );
};

const PricingCard = withStyles(styles)(_PricingCard);

const tiers = [
    {
        id: "free",
        title: <I18n label="Plan_Free" />,
        price: "0",
        description: [
            {
                key: "features",
                content: <I18n label="Pricing_featuresTeacher" />
            },
            {
                key: "workspaces",
                content: (
                    <I18n label="Pricing_workspace" options={{ count: 1 }} />
                )
            },
            {
                key: "members",
                content: (
                    <I18n label="Pricing_members" options={{ count: 50 }} />
                )
            },
            {
                key: "storage",
                content: <I18n label="Pricing_storage" options={{ count: 1 }} />
            },
            {
                key: "storagePrice",
                content: "-"
            },
            {
                key: "support",
                content: <I18n label="Pricing_emailSupport" />
            }
        ],
        buttonVariant: "outlined",
        buttonText: <I18n label="ComingSoon" />
    },
    {
        id: "pro",
        title: <I18n label="Plan_Pro" />,
        //subheader: "Most popular",
        price: "9",
        description: [
            {
                key: "features",
                content: <I18n label="Pricing_featuresTeacher" />
            },
            {
                key: "workspaces",
                content: (
                    <I18n label="Pricing_workspaces" options={{ count: 5 }} />
                )
            },
            {
                key: "members",
                content: <I18n label="Pricing_membersUnlimited" />
            },
            {
                key: "storage",
                content: (
                    <I18n label="Pricing_storage" options={{ count: 10 }} />
                )
            },
            {
                key: "storagePrice",
                content: <I18n label="Pricing_storageAdd" />
            },
            {
                key: "support",
                content: <I18n label="Pricing_emailSupportPriority" />
            }
        ],
        buttonVariant: "outlined",
        buttonText: <I18n label="ComingSoon" />
    },
    {
        id: "guru",
        title: <I18n label="Plan_Guru" />,
        price: "19",
        description: [
            {
                key: "features",
                content: <I18n label="Pricing_featuresTeacher" />
            },
            {
                key: "workspaces",
                content: (
                    <I18n label="Pricing_workspaces" options={{ count: 15 }} />
                )
            },
            {
                key: "members",
                content: <I18n label="Pricing_membersUnlimited" />
            },
            {
                key: "storage",
                content: (
                    <I18n label="Pricing_storage" options={{ count: 20 }} />
                )
            },
            {
                key: "storagePrice",
                content: <I18n label="Pricing_storageAdd" />
            },
            {
                key: "support",
                content: <I18n label="Pricing_emailSupportPriority" />
            }
        ],
        buttonVariant: "outlined",
        buttonText: <I18n label="ComingSoon" />
    },
    {
        id: "organisation",
        title: <I18n label="Plan_Organisation" />,
        price: 120,
        isPriceFrom: true,
        description: [
            {
                key: "features",
                content: <I18n label="Pricing_featuresTeacher" />
            },
            {
                key: "featuresMiniOrg",
                content: <I18n label="Pricing_featuresMiniOrg" />
            },
            {
                key: "featuresOrg",
                content: <I18n label="Pricing_featuresOrg" />
            },
            {
                key: "workspaces",
                content: (
                    <I18n
                        label="Pricing_workspacesUnlimited"
                        options={{ count: 15 }}
                    />
                )
            },
            {
                key: "members",
                content: (
                    <I18n label="Pricing_members" options={{ count: 200 }} />
                )
            },
            {
                key: "membersAdd",
                content: <I18n label="Pricing_membersAdd" />
            },
            {
                key: "storage",
                content: (
                    <I18n label="Pricing_storage" options={{ count: 120 }} />
                )
            },
            {
                key: "storagePrice",
                content: <I18n label="Pricing_storageAdd" />
            },
            {
                key: "support",
                content: <I18n label="Pricing_emailAndPhoneSupportPriority" />
            }
        ],
        buttonVariant: "contained",
        buttonText: <I18n label="ContactUs" />,
        buttonLink: "mailto:info@isyflow.ch"
    }
];

const Pricing = () => {
    return (
        <Part title={<I18n label="PricingTitle" />}>
            <div style={{ margin: "0 0 20px 0" }}>
                <PricingWarning />
            </div>
            <Grid container spacing={16} alignItems="flex-end">
                {tiers.map(tier => (
                    <PricingCard key={tier.id} tier={tier} />
                ))}
            </Grid>
        </Part>
    );
};

export default Pricing;
