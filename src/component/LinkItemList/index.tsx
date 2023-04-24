import { IconButton, Tooltip } from "@mui/material";
import { ILinkItem, LinkItemTypeEnum } from "../../domain/interface/ILinkItem";
import { ICompoenetBaseProps } from "../../domain/interface/compoenents/base";
import { Launch } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const LinkItemListComponent = ({ content = [] }: ICompoenetBaseProps<ILinkItem[]>) => {
    const linkItemList = content.map(({href, linkType}) => {
        switch (linkType) {
            case (LinkItemTypeEnum.GitHub):
                return (
                    <Tooltip title="前往GitHub">
                        <IconButton aria-label="GitHub" href={href} target="_blank">
                            <GitHubIcon></GitHubIcon>
                        </IconButton>
                    </Tooltip>
                )
            case (LinkItemTypeEnum.LinkedIn):
                return (
                    <Tooltip title="前往LinkedIn">
                        <IconButton aria-label="LinkedIn" href={href} target="_blank">
                            <LinkedInIcon></LinkedInIcon>
                        </IconButton>
                    </Tooltip>
                )
            default:
                return (
                    <Tooltip title="前往頁面">
                        <IconButton aria-label="link" href={href} target="_blank">
                            <Launch></Launch>
                        </IconButton>
                    </Tooltip>
                )
        }
    })
    return (
        <div className="link-list">
            {linkItemList}
        </div>
    )
}